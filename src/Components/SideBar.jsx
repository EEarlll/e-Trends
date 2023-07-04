import { Fragment, useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  MoonIcon,
  WalletIcon,
  WifiIcon,
  ComputerDesktopIcon,
  ArrowTrendingUpIcon,
  PuzzlePieceIcon,
  PaperAirplaneIcon,
  XMarkIcon,
  RssIcon,
  HomeModernIcon,
  MapIcon,
  ShoppingCartIcon,
  BookOpenIcon,
  CodeBracketIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import CardsChart from "./CardsChart";
import Logo from "./Logo";
import SkeletonLoader from "./SkeletonLoader";
import About from "./About";

const navigation = [
  {
    name: "Overall Trend",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Vehicles",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Books",
    icon: BookOpenIcon,
  },
  {
    name: "Computer and Technologies",
    icon: ComputerDesktopIcon,
  },
  { name: "Finance", icon: WalletIcon },
  { name: "Games", icon: PuzzlePieceIcon },
  { name: "Internet and Telecom", icon: WifiIcon },
  { name: "News", icon: RssIcon },
  { name: "Property", icon: HomeModernIcon },
  { name: "Shopping", icon: ShoppingCartIcon },
  { name: "Travel", icon: MapIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inputValue, setinputValue] = useState(" ");
  const [selectCategory, setselectCategory] = useState("Overall Trend");
  const [userInput, setuserInput] = useState(" ");
  const inputRef = useRef(null);

  const handleCategorySelect = (category) => {
    setselectCategory(category);
  };
  const handleInputValue = (event) => {
    if (event.target.value === "") {
      setinputValue(" ");
    } else {
      setinputValue(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setuserInput(event);
  };

  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  const [dark, setDark] = useState(colorTheme === "light" ? true : false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const toggleDark = (checked) => {
    setTheme(colorTheme);
    setDark(checked);
  };

  const [backendData1, setBackendData1] = useState([{}]);
  const [backendData2, setBackendData2] = useState([{}]);
  const [backendData3, setBackendData3] = useState([{}]);

  const [extractedDataTopics, setExtractedDataTopics] = useState([]);
  const [extractedDataSearch, setExtractedDataSearch] = useState([]);
  const [extractedData, setExtractedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request1 = fetch(
          `https://e-trends-api.vercel.app/api/interestOverTime?ids=${selectCategory},${
            inputValue === " " && selectCategory === "Overall Trend"
              ? "philippines"
              : inputValue
          },`
        );

        const request2 = fetch(
          `https://e-trends-api.vercel.app/api/relatedTopics?ids=${selectCategory},${
            inputValue === "" && selectCategory === "Overall Trend"
              ? "philippines"
              : inputValue
          },`
        );

        const [response1, response2] = await Promise.all([request1, request2]);

        if (typeof response1 === "undefined") {
          console.log("error");
        } else {
          const data1 = await response1.json();
          const data2 = await response2.json();

          setBackendData1(data1);
          setBackendData2(data2);
          setBackendData3(data2);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [selectCategory, userInput]);

  useEffect(() => {
    if (
      typeof backendData1.default === "undefined" ||
      typeof backendData2.default === "undefined" ||
      typeof backendData3.default === "undefined"
    ) {
    } else {
      const extracted_data1 = backendData1.default.timelineData.map(
        (item, idx) => {
          return { id: item.formattedTime, SearchRelevance: item.value };
        }
      );
      const extracted_data2_search =
        backendData2.default.rankedList[0].rankedKeyword.map((element, idx) => {
          return {
            id: element.topic.title,
            type: element.topic.type,
            val: element.value,
          };
        });

      const extracted_data2_topics =
        backendData3.default.rankedList[1].rankedKeyword.map((element, idx) => {
          return {
            id: element.topic.title,
            type: element.topic.type,
            val: element.value,
          };
        });
      setExtractedDataSearch(extracted_data2_search);
      setExtractedDataTopics(extracted_data2_topics);
      setExtractedData(extracted_data1);
    }
  }, [backendData1, backendData2, backendData3]);

  return (
    <>
      <div>
        {/* Small Breakpoint sidebar*/}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-gray-800 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white dark:text-gray"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <Logo fill={"#6366f1"} width={"40"} height={"40"} />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto ">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <button
                          onClick={() => handleCategorySelect(item.name)}
                          key={item.name}
                          className={classNames(
                            selectCategory === item.name
                              ? "bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white",
                            "group rounded-md py-2 px-2 flex items-center text-sm font-medium text-left"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500 dark:text-gray-300"
                                : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </button>
                      ))}
                    </nav>
                  </div>
                  <div className="flex items-center py-2  px-4 border-t">
                    <button
                      onClick={() => handleCategorySelect("About")}
                      className={classNames(
                        selectCategory === "About"
                          ? "bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white",
                        "rounded-md py-2 px-2 flex items-center text-sm font-medium"
                      )}
                    >
                      <InformationCircleIcon
                        className={classNames(
                          selectCategory === "About"
                            ? "text-gray-500 dark:text-gray-300"
                            : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 ",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      About
                    </button>
                  </div>
                  <div className="flex px-4 items-center py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white">
                    <div className="rounded-md py-2 px-2 flex items-center text-sm font-medium">
                      <Logo fill={"#6366f1"} width={"20"} height={"20"} />
                    </div>
                    <a
                      className="py-2 px-2"
                      href="https://github.com/EEarlll/e-Trends"
                      target="_blank"
                    >
                      Made by Earl
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* SiderBar For Desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white dark:bg-gray-800 pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
              <Logo fill={"#6366f1"} width={"40"} height={"40"} />
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              <nav className="flex-1 space-y-1 px-2 pb-4">
                {navigation.map((item) => (
                  <button
                    onClick={() => handleCategorySelect(item.name)}
                    key={item.name}
                    className={classNames(
                      selectCategory === item.name
                        ? "bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white",
                      "group rounded-md py-2 px-2 flex items-center text-sm font-medium"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-500 dark:text-gray-300"
                          : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 ",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center py-2  px-4 border-t">
              <button
                onClick={() => handleCategorySelect("About")}
                className={classNames(
                  selectCategory === "About"
                    ? "bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white",
                  "rounded-md py-2 px-2 flex items-center text-sm font-medium"
                )}
              >
                <InformationCircleIcon
                  className={classNames(
                    selectCategory === "About"
                      ? "text-gray-500 dark:text-gray-300"
                      : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 ",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                About
              </button>
            </div>
            <div className="flex px-4 items-center py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white">
              <div className="rounded-md py-2 px-2 flex items-center text-sm font-medium">
                <Logo fill={"#6366f1"} width={"20"} height={"20"} />
              </div>
              <a
                className="py-2 px-2"
                href="https://github.com/EEarlll"
                target="_blank"
              >
                Made by Earl
              </a>
            </div>
          </div>
        </div>

        <div className="md:pl-64 dark:bg-gray-700">
          <div className="mx-auto flex max-w-screen-2xl flex-col md:px-8">
            {/* Sidebar Button and Navbar */}
            <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white dark:bg-gray-700 ">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex flex-1 justify-between px-4 md:px-0">
                <div className="flex flex-1">
                  <form
                    className="flex w-full md:ml-0"
                    action="#"
                    method="GET"
                    onSubmit={handleSubmit}
                  >
                    <label htmlFor="search-field" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <MagnifyingGlassIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search-field"
                        className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm bg-white dark:bg-gray-700"
                        placeholder="Search For Keyword"
                        type="search"
                        name="search"
                        ref={inputRef}
                        onChange={handleInputValue}
                      />
                    </div>
                  </form>
                </div>
                <div className="ml-4 flex items-center md:ml-6 gap-4">
                  <button
                    type="button"
                    onClick={toggleDark}
                    className="rounded-full bg-white dark:bg-gray-700 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <a
                    href="https://github.com/EEarlll/e-Trends"
                    target="_blank"
                    className="rounded-full bg-white dark:bg-gray-700 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <CodeBracketIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Main Feed */}
            <main className="flex-1">
              <div className="py-6 ">
                {selectCategory === "About" ? (
                  <>
                    <About />
                  </>
                ) : (
                  <>
                    <div className="px-4 sm:px-6 md:px-0">
                      <h1 className="text-2xl font-semibold text-gray-900 text-center dark:text-white">
                        Interest Over Time: {selectCategory}
                      </h1>
                      <h1 className="text-2xl font-semibold text-gray-900 text-center dark:text-white">
                        Keyword: {inputValue}
                      </h1>
                    </div>
                    <div className="px-4 sm:px-6 md:px-0 ">
                      <div className="py-4">
                        <div className="h-[80vh]">
                          {typeof backendData2.default === "undefined" ? (
                            <SkeletonLoader />
                          ) : (
                            <CardsChart
                              extractedData={extractedData}
                              extractedDataSearch={extractedDataSearch}
                              extractedDataTopics={extractedDataTopics}
                            />
                          )}
                        </div>
                      </div>
                    </div>{" "}
                  </>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
