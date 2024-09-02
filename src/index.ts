import { confirm, input, select } from "@inquirer/prompts";
import { exec } from "child_process";


/**
 * Función asíncrona para crear un commit, preguntando al usuario por el tipo de cambio, ámbito, descripción y pie de página.
 */
export async function createCommitEs() {
  const type = await select({
    message: "¿Qué tipo de cambio quieres realizar?",
    loop: false,
    choices: [
      { name: "feat:  Una nueva característica", value: "feat" },
      { name: "fix:  Una corrección de errores", value: "fix" },
      { name: "docs:  Cambios en la documentación", value: "docs" },
      {
        name: "style:  Cambios que no afectan la lógica del código (espacios en blanco, formato, etc.)",
        value: "style",
      },
      {
        name: "refactor:  Cambios en el código que no corrigen errores ni añaden características",
        value: "refactor",
      },
      { name: "perf:  Cambios que mejoran el rendimiento", value: "perf" },
      {
        name: "test:  Añadir pruebas faltantes o corregir pruebas existentes",
        value: "test",
      },
      {
        name: "chore:  Cambios en el proceso de construcción o herramientas auxiliares",
        value: "chore",
      },
    ],
  });

  const scope = await input({
    message: "¿Cuál es el ámbito del cambio? (opcional)",
  });

  const description = await input({
    message: "¿Cuál es la descripción del cambio?",
  });

  const footer = await input({
    message: "¿Hay algún pie de página? (opcional)",
  });

  const commitMessage = `${type}${scope ? `(${scope})` : ""}: ${description}${
    footer ? `\n\n${footer}` : ""
  }`;

  const confirmCommit = await confirm({
    message: `¿Confirmas que quieres realizar el commit?`,
    default: false,
  });

  if (confirmCommit) {
    exec(`git commit -m "${commitMessage}"`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error al realizar el commit: ${stderr}`);
        return;
      }
      console.log(`Commit realizado: ${stdout}`);
    });
  }else {
    console.log("Commit cancelado");
  }
}

/**
 * Async function to create a commit, asking the user for the type of change, scope, description, and footer.
 */
export async function createCommitEn() {
  const type = await select({
    message: "What type of change do you want to make?",
    loop: false,
    choices: [
      { name: "feat: A new feature", value: "feat" },
      { name: "fix: A bug fix", value: "fix" },
      { name: "docs: Documentation changes", value: "docs" },
      {
        name: "style: Changes that do not affect the logic of the code (whitespace, formatting, etc.)",
        value: "style",
      },
      {
        name: "refactor: Changes to the code that do not fix bugs or add features",
        value: "refactor",
      },
      { name: "perf: Changes that improve performance", value: "perf" },
      {
        name: "test: Add missing tests or correct existing tests",
        value: "test",
      },
      {
        name: "chore: Changes to the build process or auxiliary tools",
        value: "chore",
      },
    ],
  });

  const scope = await input({
    message: "What is the scope of the change? (optional)",
  });

  const description = await input({
    message: "What is the description of the change?",
  });

  const footer = await input({
    message: "Is there any footer? (optional)",
  });

  const commitMessage = `${type}${scope ? `(${scope})` : ""}: ${description}${
    footer ? `\n\n${footer}` : ""
  }`;

  const confirmCommit = await confirm({
    message: `Do you confirm that you want to make the commit?`,
    default: false,
  });

  if (confirmCommit) {
    exec(`git commit -m "${commitMessage}"`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error making the commit: ${stderr}`);
        return;
      }
      console.log(`Commit made: ${stdout}`);
    });
  } else {
    console.log("Commit canceled");
  }
}

