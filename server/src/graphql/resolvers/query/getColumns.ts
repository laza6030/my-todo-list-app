import { Column } from '../../../generated/types'
import ColumnModels from '../../../models/columnModels'

export const getColumns = async (): Promise<Column[]> => {
    const columns: Column[] = await ColumnModels.find()
    return columns
}
