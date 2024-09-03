type Props = {
    skills: string[]
}

export default function SkillsList({ skills }: Props) {
    console.log('skills usArray', Array.isArray(skills))
    console.log('skills', skills)
    return (
        <div>
            {skills.map((skill) => <div key={skill}>{skill}</div>)}
        </div>
    )
}