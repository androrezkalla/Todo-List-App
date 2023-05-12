import { getLinksLinks } from "csc-start/utils/data";

const LinksLinks = async () => {
  const links = await getLinksLinks();
  return (
    <div className="barge flex flex-col gap-[24px] pb-[60px]">
      {Array.isArray(links) &&
        links.map(({ id, title, url }) => {
          return (
            <a
              key={id}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              className="button"
            >
              {title}
            </a>
          );
        })}
    </div>
  );
};

export default LinksLinks;
