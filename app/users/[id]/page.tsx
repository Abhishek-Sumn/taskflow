const users = ({ params, }: {
    params: { id: string }
}) => {
    return (
        <div>
            user {params.id}
        </div>
    )
}

export default users;