import React from "react";

type group = {
    name: string;
    description: string;
    image: string;
    subgroups: subgroups[]
}

type subgroups = {
    name: string;
}

interface Props {
    group: group
}

const SelectDropdown = ({ group }: Props) => {
    const [ isOpen, setIsOpen ] = React.useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMauseLeave = () => {
        setIsOpen(false)
    }

    return (
        <div
            className="h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMauseLeave}
        >
            <div className="px-4 cursor-pointer hover:text-[#FEEB0B] text-white text-nowrap">
                { group.name }
            </div>
            {
                isOpen && (
                    <div
                        className="absolute z-10 shadow-md left-0 right-0 h-fit max-h-[58vh] flex flex-col flex-wrap items-start gap-1 p-5 overflow-x-auto bg-white"
                    >
                        {
                            group?.subgroups?.map((subgroup, idx) => {
                                return (
                                    <span
                                        key={`${subgroup?.name}-${idx}`}
                                        className="w-[170px] hover:text-[#E2060F] cursor-pointer"
                                    >
                                        { subgroup?.name }
                                    </span>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}
export default SelectDropdown;