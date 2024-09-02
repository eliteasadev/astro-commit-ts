import { promises as fs } from 'fs';
import path from 'node:path';
import { select, input } from '@inquirer/prompts';

// Configuration file content for Spanish
const configurationFileContentEs = `import { createCommitEs } from "astro-commit-ts";

createCommitEs().catch((error) => {
  console.error("Error:", error);
});
`;

// Configuration file content for English
const configurationFileContentEn = `import { createCommitEn } from "astro-commit-ts";

createCommitEn().catch((error) => {
  console.error("Error:", error);
});
`;

// Function to create the configuration file
async function createFile(language, fileName) {
  const filePath = path.join(process.cwd(), fileName);
  let configurationFileContent;

  // Select the content based on the language
  if (language === 'es') {
    configurationFileContent = configurationFileContentEs;
  } else if (language === 'en') {
    configurationFileContent = configurationFileContentEn;
  } else {
    console.error('Invalid language. Please choose "es" for Spanish or "en" for English.');
    return;
  }

  try {
    await fs.writeFile(filePath, configurationFileContent);
    console.log(`${fileName} created successfully!`);
  } catch (error) {
    console.error(`Error creating ${fileName}:`, error);
  }
}

// Main function to ask the language and file name
async function askLanguageAndFileName() {
  const language = await select({
    message: 'What language do you want to work with?',
    choices: [
      { name: 'Español', value: 'es' },
      { name: 'English', value: 'en' }
    ]
  });

  const fileName = await input({
    message: language === 'es' ? '¿Qué nombre deseas darle al archivo de configuración?' : 'What name do you want to give to the configuration file?',
    default: 'commit.config.mjs'
  });

  let fileNameParam = fileName;

  if (! fileName.endsWith('.mjs')) {
    fileNameParam = `${fileName}.mjs`;
  }

  createFile(language, fileNameParam);
}

// Call the function to ask the language and file name
askLanguageAndFileName();