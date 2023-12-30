export default function Button(props: any) {
  return (
    <button className="bg-main text-white p-[10px] rounded-[10px]">
      {props.msg}
    </button>
  );
}
