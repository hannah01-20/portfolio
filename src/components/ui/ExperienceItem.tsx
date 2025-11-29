type ExperienceItemProps = {
    jobTitle: string;
    startDate: string;
    endDate: string;
    companyName: string;
    responsibilities: string[];
    lastItem?: boolean
}
function ExperienceItem({
  jobTitle,
  startDate,
  endDate,
  companyName,
  responsibilities,
  lastItem
}: ExperienceItemProps) {
  return (
    <div
      className={
        `
        bg-pink-200/15 border border-pink-200 rounded-2xl backdrop-blur-lg p-5 
        shadow-xl shadow-pink-200 
        w-full md:w-fit              /* prevent stretch on desktop */
        ${lastItem ? "md:col-span-2 md:place-self-center" : ""}
        `
      }
    >
      <div className="grid grid-cols-2 items-center">
        <h1 className="text-xs font-semibold sm:text-xl">{jobTitle}</h1>
        <div className="text-[0.5rem] text-right sm:text-[0.9rem]">
          <p>{startDate} - {endDate}</p>
          <p>{companyName}</p>
        </div>
      </div>

      <ul className="list-disc py-3 px-5 sm:p-4 text-xs grid gap-2 justify-center sm:text-xl">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}


export default ExperienceItem