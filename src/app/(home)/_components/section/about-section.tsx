export function AboutSection() {
  return (
    <section className="w-full flex justify-between max-w-6xl mx-auto my-24 gap-5">
      <div className="text-justify w-full max-w-lg">
        <h5 className="text-xs uppercase tracking-wider mb-2 font-medium text-orange-900">
          About Our Agency
        </h5>
        <h2 className="text-3xl font-semibold mb-5">Who We Are</h2>
        <p className="mb-5 text-justify text-sm">
          We&#39;re a digital agency focused on helping businesses create
          websites that look professional, build trust, and generate leads.
        </p>
        <p className="mb-5 text-justify text-sm">
          Whether you&#39;re launching a new business, refreshing an outdated
          website, or expanding your digital presence, we help turn ideas into
          effective online experiences.
        </p>
      </div>
      <img
        src="./placeholder.webp"
        alt="Placeholder image"
        className="w-full max-w-1/2 aspect-square rounded-lg object-cover"
      />
    </section>
  );
}
