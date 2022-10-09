import { MutationCreateWorkspaceArgs } from '../../../generated/types'
import workspaceModel from '../../../models/workspaceModel'

export const createWorkspace = async (
    _,
    { name, userId }: MutationCreateWorkspaceArgs
) => {
    try {
        const workspace = new workspaceModel({ name, userId })
        return await workspace.save()
    } catch (error) {
        console.error(error)
    }
}
