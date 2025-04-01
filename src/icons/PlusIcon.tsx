
interface PlusIconProps {
    size: "sm" | "md" | "lg"
}

const sizeVarients = {
  "sm": "size-4",
  "md": "size-4",
  "lg": "size-8"
}

export function PlusIcon(props: PlusIconProps){

return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={sizeVarients[props.size]}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
}