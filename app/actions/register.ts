'use server'

import { revalidatePath } from 'next/cache'
import { db } from '@/db'
import { users } from '@/db/schema'

export async function registerUser(formData: FormData) {
  const personalInfo = {
    fullName: formData.get('fullName') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
  }
  console.log('personalInfo:', personalInfo)

  const education = {
    institution: formData.get('institution') as string,
    degree: formData.get('degree') as string,
    graduationYear: parseInt(formData.get('graduationYear') as string),
  }

  const workExperience = {
    company: formData.get('company') as string,
    jobTitle: formData.get('jobTitle') as string,
    duration: formData.get('duration') as string,
    responsibilities: formData.get('responsibilities') as string,
  }

  const skillsPreferences = {
    skills: formData.get('skills') as string,
    desiredPosition: formData.get('desiredPosition') as string,
    expectedSalary: parseInt(formData.get('expectedSalary') as string),
    remoteWork: formData.get('remoteWork') === 'on',
    relocation: formData.get('relocation') === 'on',
  }

  const resumeFile = formData.get('resume') as File
  let resumeUrl = ''

  if (resumeFile) {
    resumeUrl = await uploadFile(resumeFile)
  }

  const userData = {
    ...personalInfo,
    ...education,
    ...workExperience,
    ...skillsPreferences,
    resumeUrl,
  }

  try {
    console.log('Registering user:', userData);
    await db.insert(users).values(userData)

    revalidatePath('/register')

    return { success: true, message: 'User registered successfully!' }
  } catch (error) {
    console.error('Error registering user:', error)
    return { success: false, message: 'Failed to register user. Please try again.' }
  }
}

async function uploadFile(file: File): Promise<string> {
  // Implement your file upload logic here
  // This could involve uploading to a cloud storage service like AWS S3
  // For now, we'll just return a placeholder URL
  return 'https://example.com/uploads/' + file.name
}

