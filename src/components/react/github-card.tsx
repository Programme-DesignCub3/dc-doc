export default function Example() {
  return (
    <div className="w-full h-60 border-[#30363d] rounded-md not-prose bg-gray-200 flex-none relative border-2 shadow max-w-sm">
      <img
        src="https://github.githubassets.com/images/modules/dashboard/codespaces/bg.jpg"
        alt=""
        className="object-cover w-full h-full"
      />
      <div className="flex flex-col justify-between absolute p-4 top-0 w-full h-full">
        <div className="flex justify-between">
          <h1 className="text-lg text-white">
            Start coding instantly with GitHub Codespaces{" "}
          </h1>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-x"
          >
            <path
              fillRule="evenodd"
              fill="#fff"
              d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
            ></path>
          </svg>
        </div>
        <p className="w-3/4 text-stone-400 text-xs leading-6">
          pin up fully configured dev environments on powerful VMs that start in
          seconds. Get up to 60 hours a month of free time.
        </p>
        <button className="border-[#673281] border p-1 rounded-md text-white bg-[#4c4150] hover:opacity-80 transition w-full text-center">
          Get started
        </button>
      </div>
    </div>
  );
}
