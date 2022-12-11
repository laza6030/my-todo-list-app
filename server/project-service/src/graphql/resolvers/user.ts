import workspaceModel from '../../models/workspaceModel'

export default {
    User: {
        async __resolveReference({ id }: { id: string }) {
            const workspace = await workspaceModel.find({ userId: id })
            return { defaultWorkspaceId: workspace[0]._id }
        },
    },
}
