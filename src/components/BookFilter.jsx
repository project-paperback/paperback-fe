import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function Filters() {
  const [selectedPublishers, setSelectedPublishers] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handlePublisherCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedPublishers((prevSelected) =>
      e.target.checked
        ? [...prevSelected, value]
        : prevSelected.filter((publisher) => publisher !== value)
    );
  };

  const handleCategoryCheckboxChange = (e) => {
    const value = e.target.value;

    setSelectedCategories((prevSelected) =>
      e.target.checked
        ? [...prevSelected, value]
        : prevSelected.filter((category) => category !== value)
    );
  };

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    if (selectedPublishers.length > 0) {
      params.publisher = selectedPublishers.join(",");
    } else {
      delete params.publisher; // Remove publisher param if none selected
    }
    if (selectedCategories.length > 0) {
      params.category = selectedCategories.join(",");
    } else {
      delete params.category; // Remove category param if none selected
    }

    setSearchParams(params);
  }, [selectedPublishers, selectedCategories, searchParams]);

  return (
    <form className="lg:mr-8 flex flex-col gap-2">
      <h2 className="roboto-regular border-[#778da9] border-b-[1px] pb-2 text-2xl">
        Filter by
      </h2>
      {/* publisher filters */}
      <div className="collapse rounded-none border-[#778da9] border-b-[1px]">
        <input type="checkbox" />
        <div className="collapse-title text-[1rem] font-medium">
          <h2 className="roboto-regular">Publisher</h2>
        </div>
        <div className="collapse-content flex flex-col gap-3">
          <div className="flex flex-row">
            <input
              type="checkbox"
              id="cambridge"
              value="Cambridge University Press"
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handlePublisherCheckboxChange}
            />
            <label htmlFor="cambridge">Cambridge University Press</label>
          </div>

          <div className="flex flex-row">
            <input
              type="checkbox"
              id="grove"
              value="Grove Press"
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handlePublisherCheckboxChange}
            />
            <label htmlFor="grove">Grove Press</label>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              id="oxford"
              value="Oxford University Press"
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handlePublisherCheckboxChange}
            />
            <label htmlFor="oxford">Oxford University Press</label>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              id="penguin"
              value={"Penguin"}
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handlePublisherCheckboxChange}
            />
            <label htmlFor="penguin">Penguin</label>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              id="routledge"
              value={"Routledge"}
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9]   [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handlePublisherCheckboxChange}
            />
            <label htmlFor="routledge">Routledge</label>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              id="wordsworth"
              value={"Wordsworth Editions"}
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handlePublisherCheckboxChange}
            />
            <label htmlFor="wordsworth">Wordsworth Editions</label>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              id="yale"
              value={"Yale University Press"}
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handlePublisherCheckboxChange}
            />
            <label htmlFor="yale">Yale University Press</label>
          </div>
        </div>
      </div>
      {/* publisher filters end */}
      {/* category filters */}
      <div className="collapse rounded-none border-[#778da9] border-b-[1px]">
        <input type="checkbox" />
        <div className="collapse-title text-[1rem] font-medium">
          <h2 className="roboto-regular">Category</h2>
        </div>

        <div className="collapse-content flex flex-col gap-3">
          <div className="flex flex-row">
            <input
              type="checkbox"
              id="architecture"
              value="Architecture"
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handleCategoryCheckboxChange}
            />
            <label htmlFor="architecture"> Architecture</label>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              id="art"
              value="Art"
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handleCategoryCheckboxChange}
            />
            <label htmlFor="art"> Art</label>
          </div>

          <div className="flex flex-row">
            <input
              type="checkbox"
              id="education"
              value="Education"
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handleCategoryCheckboxChange}
            />
            <label htmlFor="education">Education</label>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              id="fiction"
              value="Fiction"
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handleCategoryCheckboxChange}
            />
            <label htmlFor="fiction">Fiction</label>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              id="history"
              value="History"
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handleCategoryCheckboxChange}
            />
            <label htmlFor="history">History</label>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              id="nonfiction"
              value="Non-Fiction"
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handleCategoryCheckboxChange}
            />
            <label htmlFor="nonfiction">Non-Fiction</label>
          </div>

          <div className="flex flex-row">
            <input
              type="checkbox"
              id="psychology"
              value="Psychology"
              className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
              onChange={handleCategoryCheckboxChange}
            />
            <label htmlFor="psychology">Psychology</label>
          </div>
        </div>
      </div>
      {/* category filters end*/}
    </form>
  );
}
