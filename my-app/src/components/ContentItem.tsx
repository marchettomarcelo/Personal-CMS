import {ContentItemProps} from "../react-app-env"

export default function ContentItem({ info, id, path, publishOnNextBuild  }:ContentItemProps) {
  return (
    <div
      id={id}
      className="cursor-pointer border-4 border-black flex flex-row
      content-center
      h-fit
      border-solid  p-2 rounded shadow-lg w-11/12 
      hover:bg-gray-200 active:bg-gray-300"
    >
      <div className="w-10/12">
        <h3 id={id} className="text-xl font-bold">
          {path.length > 20 ? path.slice(0, 20) + "..." : path}
        </h3>
        <p id={id} className="text-sm break-all">
          {info.length > 80 ? info.slice(0, 80) + "..." : info}
        </p>

      </div>

      <div 
        id={id}
        className="w-2/12 flex flex-col items-center justify-center">

        {publishOnNextBuild ? 
        null
        : 
        <svg  id={id} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="#BC1C1C">
          <path id={id} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path id={id} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        }

      </div>
      
    </div>
  );
}
