export default function Badge({ title }) {
  return (
    <span class="absolute px-2 py-1 top-2 left-2 text-xs font-bold rounded-full text-black bg-[#f6c768]">
      {title}
    </span>
  );
}
