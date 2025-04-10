export type Application = {
    id: string
    userId: string,
    user: User,
    jobId: string,
    job: Job,
    appliedAt: Date
}

export type Job = {
    id: string,
    title: string,
    desc: string,
    companyId: string,
    company: Company,
    createdBy: string,
    salary: string,
    location: string,
    skills: string,
    experience: string,
    applicants: Application[],
    createdAt: Date,
    updatedAt: Date,
}

export type User = {
    id: string,
    fullname: string,
    email: string,
    applications: Application[],
    number: BigInt,
    password: string
    role: string
    resume?: string,
    profileImg?: string ,
    skills: string[]
    bio?: string,
    company: Company,
    createdAt: Date
    updatedAt: Date
}

export type Company = {
    id: string,
    name: string,
    description: string,
    logo: string,
    website: string,
    userId: string,
    user: User,
    jobs: Job[]
}