interface Props {
    classe?: String;
}
export default function Divider({ classe }: Props) {
    return <div className={`border-t w-8/12 m-auto border-zinc-500 py-10 ${classe} `}></div>
}