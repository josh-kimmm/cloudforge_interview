import { TableRow, TableCell } from 'app/_components/ui';
import { QMetals } from '@/types/prisma';

export default function MetalRow({ metal }: { metal: QMetals }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{metal.id}</TableCell>
      <TableCell className="hidden md:table-cell">{metal.material}</TableCell>
      <TableCell className="hidden md:table-cell">{metal.shape}</TableCell>
      <TableCell className="hidden md:table-cell">{metal.grade}</TableCell>
      <TableCell className="hidden md:table-cell">{metal.finish}</TableCell>
      <TableCell className="hidden md:table-cell">
        {Object.keys(metal.dimensions).map((dimension) => (
          <span
            key={metal.id}
            className="block text-nowrap"
          >{`${dimension}: ${metal.dimensions[dimension]}`}</span>
        ))}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {metal.created_at.toString()}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {metal.updated_at.toString()}
      </TableCell>
    </TableRow>
  );
}
