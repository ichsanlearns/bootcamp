import path from "node:path";
import { resend } from "../lib/resend.js";
import { AppError } from "./app-error.util.js";
import fs from "node:fs/promises";
import Handlebars from "handlebars";

interface SendEmail {
  from: string;
  email: string;
  subject: string;
  html: string;
}

export async function sendEmail({ from, email, subject, html }: SendEmail) {
  try {
    const { error, data } = await resend.emails.send({
      from,
      to: email,
      subject,
      html,
    });
    if (error) {
      throw new AppError(500, "Failed to send email");
    }
  } catch (error) {
    throw error;
  }
}

export async function compileTemplate(
  templateName: string,
  data: Record<string, any>,
) {
  try {
    const templatePath = path.join(
      process.cwd(),
      `src/templates/${templateName}.hbs`,
    );

    const source = await fs.readFile(templatePath, "utf-8");
    const template = Handlebars.compile(source);

    return template(data);
  } catch (error) {
    throw new AppError(500, "Failed to compile email template");
  }
}
