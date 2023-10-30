'use strict'

const sh = require('shell-exec')

module.exports = function (port, method = 'tcp') {
	port = Number.parseInt(port)

	if (!port) {
		return Promise.reject(new Error('Invalid port number provided'))
	}

	if (process.platform === 'win32') {
		return sh('netstat -nao').then((res) => {
			const { stdout } = res
			if (!stdout) return res

			const lines = stdout.split('\n')
			// The second white-space delimited column of netstat output is the local port,
			// which is the only port we care about.
			// The regex here will match only the local port column of the output
			const lineWithLocalPortRegEx = new RegExp(
				`^ *${method.toUpperCase()} *[^ ]*:${port}`,
				'gm'
			)
			const linesWithLocalPort = lines.filter((line) =>
				line.match(lineWithLocalPortRegEx)
			)

			const pids = linesWithLocalPort.reduce((acc, line) => {
				const match = line.match(/(\d*)\w*(\n|$)/gm)
				return match && match[0] && !acc.includes(match[0])
					? acc.concat(match[0])
					: acc
			}, [])

			return sh(`TaskKill /F /PID ${pids.join(' /PID ')}`)
		})
	}

	return sh(`lsof -i:${port} -P`).then((res) => {
		const { stdout } = res
		if (!stdout) return res
		const lines = stdout.split('\n')
		const existProccess =
			lines.filter((line) => line.match(new RegExp(`:*${port}`))).length > 0
		if (!existProccess)
			return Promise.reject(new Error('No process running on port'))

		return sh(
			`pid=$(lsof -i ${method === 'udp' ? 'udp' : 'tcp'}:${port} | grep ${
				method === 'udp' ? 'UDP' : 'LISTEN'
			} | awk '{print $2}') && kill -9 $pid`
		)
	})
}
