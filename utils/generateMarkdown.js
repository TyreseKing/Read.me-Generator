// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let badge = ""
  if (data.license === "MIT") {
    badge = '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    return badge;
  
  } if(data.license === "Apache") {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    return badge;

  }  if(data.license === "Boost") {
     badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
     return badge;
     
  }else {
    return
  }
}

// If there is no license, return an empty string
function renderLicenseToc(data) {
  if (data.license === "None") {
    return ""
 } else {
  return `* [License](#license)`
  }
}

// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === "None") {
    return ""
 } else {
  return `## License
  ${renderLicenseBadge(data)}`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
${renderLicenseToc(data)}

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution 
${data.contribution}
## test
${data.test}
${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;
