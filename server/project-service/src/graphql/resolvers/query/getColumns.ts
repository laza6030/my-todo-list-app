import { Column, QueryGetColumnsArgs } from '../../../generated/types'
import ColumnModels from '../../../models/columnModel'

export const getColumns = async (
    _,
    { workspaceId }: QueryGetColumnsArgs
): Promise<Column[]> => {
    const columns: Column[] = await ColumnModels.find({ workspaceId })
    return columns
}
