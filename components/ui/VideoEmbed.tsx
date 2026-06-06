type VideoEmbedProps = {
  url: string;
  title: string;
  className?: string;
  autoplayMuted?: boolean;
  loop?: boolean;
  controls?: boolean;
};

function getYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1) || null;
    }
    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }
  return null;
}

export function VideoEmbed({
  url,
  title,
  className = "",
  autoplayMuted = false,
  loop = false,
  controls = true,
}: VideoEmbedProps) {
  const id = getYouTubeId(url);

  if (!id) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark",
          className,
        ].join(" ")}
      >
        Watch video →
      </a>
    );
  }

  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    ...(autoplayMuted ? { autoplay: "1", mute: "1" } : {}),
    ...(loop ? { loop: "1", playlist: id } : {}),
    ...(controls ? {} : { controls: "0" }),
  });

  return (
    <div
      className={[
        "relative aspect-video overflow-hidden rounded-2xl border border-border bg-black shadow-lg",
        className,
      ].join(" ")}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
