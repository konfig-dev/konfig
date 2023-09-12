import * as inquirer from 'inquirer'

/**
 * Prompt for input using inquirer.prompt, unless ci = true, in which case return ciDefault
 */
export async function inquirerPromptCI<T extends inquirer.Answers = inquirer.Answers>({
  ci,
  ciDefault,
  questions,
  initialAnswers,
}: {
  ci: boolean,
  ciDefault: T,
  questions: inquirer.QuestionCollection<T>,
  initialAnswers?: Partial<T>
}): Promise<T> {
  if (ci) return ciDefault
  return inquirer.prompt<T>(questions, initialAnswers)
}