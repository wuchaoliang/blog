import React from "react";
import { IoMenu, IoLogoRss, IoPerson, IoSunny } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
import { Menu } from "@headlessui/react";
import headerNavLinks from "../../../../data/common/headerNavLinks";
import { ResizableBox } from "react-resizable"; //https://github.com/react-grid-layout/react-resizable

export default function Dragable() {

  return (

    <React.Fragment>
      <ResizableBox
        width={400}
        height={220}
        minConstraints={[180, 220]}
        maxConstraints={[678, 220]}
        resizeHandles={["e"]}
        className="mx-auto max-w-[100%]"
      >
        <div className="w-full h-[220px] img-loading-bg border border-neutral-200 dark:border-neutral-800 rounded-lg flex items-center @container">
          <div className="relative flex justify-between items-center mx-auto px-3 w-[88%] h-[60px] bg-color rounded ">
            <div className="ring-default cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 150 80"
                className="h-[42px] fill-current"
                alt="吴超亮的个人网站"
              >
                <path d="M25.092 50.472c.447 0 .819.156 1.117.47.298.312.447.677.447 1.095v3.22c0 .416-.15.782-.447 1.095-.298.313-.67.47-1.117.47H5.564a1.5 1.5 0 0 1-1.095-.47A1.502 1.502 0 0 1 4 55.256V25.565c0-.417.156-.782.47-1.095A1.499 1.499 0 0 1 5.564 24h3.351a1.5 1.5 0 0 1 1.095.47c.313.313.47.678.47 1.095v24.907h14.612zm31.573 3.935c.327.506.342 1.043.044 1.61-.298.536-.745.804-1.34.804h-4.022c-.566 0-.998-.238-1.296-.715l-6.703-10.687h-7.91v9.837c0 .417-.156.783-.469 1.096a1.499 1.499 0 0 1-1.094.47h-3.352a1.501 1.501 0 0 1-1.095-.47 1.503 1.503 0 0 1-.469-1.096V25.565c0-.417.157-.782.47-1.095a1.499 1.499 0 0 1 1.094-.47h14.21c3.426 0 6.197.969 8.312 2.907 2.145 1.967 3.217 4.62 3.217 7.959 0 2.146-.469 3.987-1.407 5.522-.939 1.535-2.316 2.69-4.134 3.466-.116.058-.235.11-.357.156a3.708 3.708 0 0 0-.358.157l6.659 10.24zM35.439 39.114h8.713c2.562 0 4.305-.73 5.229-2.191.298-.537.447-1.222.447-2.057 0-1.401-.462-2.504-1.386-3.31-1.013-.834-2.383-1.251-4.11-1.251h-8.893v8.809zm44.353-13.996a14.73 14.73 0 0 1 4.87 3.309c3.099 3.16 4.648 7.154 4.648 11.984 0 4.829-1.55 8.823-4.648 11.983a14.598 14.598 0 0 1-10.546 4.427H61.604a1.5 1.5 0 0 1-1.094-.47 1.502 1.502 0 0 1-.47-1.095V25.565c0-.417.157-.782.47-1.095a1.499 1.499 0 0 1 1.094-.47h12.512c.984 0 1.952.097 2.905.29.953.194 1.877.47 2.77.828h.001zM66.52 50.516h7.462c2.622 0 4.752-.969 6.39-2.906 1.639-1.908 2.458-4.308 2.458-7.2 0-2.891-.819-5.29-2.458-7.199-1.638-1.937-3.768-2.906-6.39-2.906H66.52v20.211zm30.41-1.296c.418 0 .783.149 1.095.447.313.298.47.67.47 1.118v4.65c0 .417-.157.782-.47 1.095a1.499 1.499 0 0 1-1.094.47h-4.067c-.447 0-.819-.157-1.117-.47a1.538 1.538 0 0 1-.447-1.095v-4.65c0-.448.15-.82.447-1.118.298-.298.67-.447 1.117-.447h4.067-.001zM107.234 24a1.499 1.499 0 0 1 1.095.47c.312.313.469.678.469 1.095v29.691c0 .417-.157.783-.47 1.096a1.503 1.503 0 0 1-1.094.47h-3.352a1.504 1.504 0 0 1-1.094-.47 1.493 1.493 0 0 1-.47-1.096V25.565c0-.417.157-.782.47-1.095a1.503 1.503 0 0 1 1.094-.47h3.352zm37.203 0a1.499 1.499 0 0 1 1.095.47 1.5 1.5 0 0 1 .469 1.095v29.691a1.5 1.5 0 0 1-.47 1.096 1.503 1.503 0 0 1-1.094.47h-3.351a1.499 1.499 0 0 1-1.095-.47 1.493 1.493 0 0 1-.47-1.096V35.224l-8.222 10.552c-.298.388-.7.582-1.206.582-.507 0-.909-.194-1.207-.582l-8.4-10.597v20.077c0 .417-.157.783-.47 1.096a1.496 1.496 0 0 1-1.095.47h-3.351a1.499 1.499 0 0 1-1.095-.47 1.493 1.493 0 0 1-.47-1.096V25.565c0-.417.157-.782.47-1.095a1.506 1.506 0 0 1 1.095-.47h3.888c.506 0 .923.209 1.25.626l9.385 12.43 9.205-12.43c.268-.417.685-.626 1.251-.626h3.888z" />
              </svg>
            </div>
            <div className="flex gap-1 items-center">
              <div className="hidden @[340px]:flex gap-1 items-center">
                {headerNavLinks.map((link) => (
                  <div key={link.title} className="btn-base hover:text-primary btn-md text-tertiary cursor-pointer">
                    <span>{link.title}</span>
                  </div>
                ))}
              </div>

              <Menu as="div" className="relative inline-block text-left @[340px]:hidden">
                <div>
                  <Menu.Button className="btn-base btn-icon" title="导航菜单">
                    <IoMenu className="text-2xl" />
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute top-12 right-0 rtl:left-0 rtl:right-auto rounded-xl bg-color shadow-lg border border-neutral-200 dark:border-2 dark:border-neutral-800">
                  <div className="p-2 w-40 w-max-48 flex flex-col">
                    {headerNavLinks.map((link) => (
                      <Menu.Item key={link.title}>
                        {({ active }) => (
                          <div
                            className={` btn-base btn-md px-3 py-4 cursor-pointer ${active
                                ? "ring-4 ring-offset-2 ring-offset-neutral-100 dark:ring-offset-black ring-blue-600"
                                : ""
                              }`}
                          >
                            {link.title}
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                    <hr className="my-1 mx-3 z-[-1]" />

                    <Menu.Item>
                      <div className="flex items-center justify-between p-2 active:ring-0 active:ring-offset-0">
                        <div className="flex justify-center relative btn-base btn-icon">
                          <IoPerson className="text-xl cursor-pointer" />
                        </div>
                        <div className="flex justify-center">
                          <div className="btn-base btn-icon">
                            <IoLogoRss className="text-xl cursor-pointer" />
                          </div>
                        </div>
                        <div className="flex justify-center btn-base btn-icon text-xl">
                          <IoSunny className="text-xl cursor-pointer" />
                        </div>
                      </div>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </ResizableBox>
      <figcaption>
        拖动右侧手柄，缩小容器宽度来查看适配的效果。
      </figcaption>
      <style jsx="true">{`
        .react-resizable {
          position: relative;
          user-select: none;
        }
        .react-resizable-handle {
          position: absolute;
          width: 16px;
          height: 32px;
          background-color: #FFFFFF;
          border-radius: 4px;
          border: 1px solid #DDDDDD;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
          transition: all 0.1s ease;
        }
        .react-resizable-handle:hover, .react-resizable-handle:active{
          border-color: #bbb;
          border-width: 1.5;
        }

        .dark .react-resizable-handle {
          background-color: #000000;
          border-color: #262626;
        }

        .dark .react-resizable-handle:hover, .dark .react-resizable-handle:active{
          border-color: #666;
          border-width: 1.5;
        }
        
        .react-resizable-handle-e {
          right: 0;
          top: 50%;
          transform: translate(50%, -50%);
          cursor: ew-resize;
          user-select: none;

        }
      `}</style>
    </React.Fragment>
  );


}
