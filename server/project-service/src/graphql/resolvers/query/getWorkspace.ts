import { QueryGetWorkspaceArgs } from '../../../generated/types'
import WorkspaceModel from '../../../models/workspaceModel'

export const getWorkspace = async (_, { userId }: QueryGetWorkspaceArgs) => {
    const workspace = await WorkspaceModel.find({ userId })

    return workspace ?? []
}
