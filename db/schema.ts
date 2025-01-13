import { pgTable, serial, text, integer, boolean, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull(),
  resumeUrl: text('resume_url'),
  institution: text('institution').notNull(),
  degree: text('degree').notNull(),
  graduationYear: integer('graduation_year').notNull(),
  company: text('company').notNull(),
  jobTitle: text('job_title').notNull(),
  duration: text('duration').notNull(),
  responsibilities: text('responsibilities').notNull(),
  skills: text('skills').notNull(),
  desiredPosition: text('desired_position').notNull(),
  expectedSalary: integer('expected_salary').notNull(),
  remoteWork: boolean('remote_work').notNull(),
  relocation: boolean('relocation').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

