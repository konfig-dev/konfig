# coding: utf-8

"""
    SnapTrade

    Connect brokerage accounts to your app for live positions and trading

    The version of the OpenAPI document: 1.0.0
    Contact: api@snaptrade.com
    Created by: https://snaptrade.com/
"""

from setuptools import setup, find_packages  # noqa: H301

NAME = "snaptrade-python-sdk"
VERSION = "11.0.12"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

# read the contents of README file
from pathlib import Path
this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()

REQUIRES = [
    "certifi >= 2023.7.22",
    "python-dateutil ~= 2.8.2",
    "typing_extensions ~= 4.3.0",
    "urllib3 ~= 1.26.18, ~= 2.0.0",
    "cryptography ~= 42.0.5",
    "frozendict ~= 2.3.4",
    "aiohttp ~= 3.8.4"
]

setup(
    name=NAME,
    version=VERSION,
    description="SnapTrade",
    author="SnapTrade",
    author_email="api@snaptrade.com",
    url="https://github.com/passiv/snaptrade-sdks/tree/master/sdks/python",
    keywords=["Konfig", "SnapTrade"],
    python_requires=">=3.7",
    install_requires=REQUIRES,
    packages=find_packages(exclude=["test", "tests"]),
    include_package_data=True,
    license="MIT",
    long_description=long_description,
    long_description_content_type='text/markdown'
)
