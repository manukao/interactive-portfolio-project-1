import Image from "next/image";

export default function BioCard({ developer }) {
  return (
    <div>
      <Image
        src={developer.avatar}
        alt={developer.name}
        width={96}
        height={96}
      />
      <p>
        Hi, I am {developer.name}
        {developer.infoText}
      </p>
      <ul>
        {developer.infoTags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
