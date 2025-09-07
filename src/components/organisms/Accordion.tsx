import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import {type ReactNode} from 'react'

type Props = {title: string; content: ReactNode}

export default function ControlledAccordion({title, content}: Props) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="my-1">
        <AccordionTrigger className="bg-neutral-200 shadow-sm p-2 hover:bg-neutral-300 cursor-pointer hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent className="bg-neutral-100 shadow-sm mt-1 p-2">{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
