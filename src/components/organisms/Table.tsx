import {Table, TableBody, TableHead, TableHeader, TableRow} from '@/components/ui/table'

export default function ControlledTable({
  columns,
  renderData = null
}: {
  columns: string[]
  renderData?: any
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col, index) => {
            return <TableHead key={`column-${index + 1}`}>{col?.toString()}</TableHead>
          })}
        </TableRow>
      </TableHeader>
      <TableBody>{renderData && renderData()}</TableBody>
    </Table>
  )
}
