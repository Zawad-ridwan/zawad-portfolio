type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

// Standard page section: heading with a short rule after it, then the content.
export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="border-t border-line py-22">
      <div className="wrap">
        <h2 className="mb-10 flex items-center gap-5 font-head text-[clamp(1.9rem,4vw,2.6rem)] font-bold leading-tight text-balance after:h-px after:max-w-55 after:flex-1 after:bg-line after:content-['']">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
