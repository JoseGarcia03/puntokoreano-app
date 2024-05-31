import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SelectDropdown from "./Select.component";

type group = {
    name: string;
    description: string;
    image: string;
    subgroups: subgroups[]
}

type subgroups = {
    name: string;
}

const GroupComponent = () => {
    const { data } = useQuery({
        queryKey: ['groups'],
        queryFn: () => {
            return axios.get(`${import.meta.env.VITE_API_REST_URL}/api/groups`)
            .then((resp) => {
                return resp.data
            });
        }
    });

    return (
        <div className="w-full">
            <div className="bg-[#001529] flex overflow-x-auto h-full px-2">
                {
                    data?.groups?.map((group: group) => {
                        return <SelectDropdown group={group} />
                    })
                }
            </div>
            <div className="h-screen"></div>
        </div>
    )
};
export default GroupComponent;