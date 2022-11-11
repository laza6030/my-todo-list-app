import WorkspaceModel from '../../../models/workspaceModel'
import { MutationDeleteWorkspaceArgs } from '../../../generated/types'

export const deleteWorkspace = async (
    _,
    { workspaceId }: MutationDeleteWorkspaceArgs
) => {
    try {
        await WorkspaceModel.deleteOne({ _id: workspaceId })
        return true
    } catch {
        return false
    }
}
