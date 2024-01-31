import { use } from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

/**
 * Client Page - Renders DataTable
 * For more info: https://ui.shadcn.com/docs/components/table
 */
export default async function ClientPage() {
  const data = await getData();

  return (
    <div
      className="container min-w-fit mx-auto py-24"
      style={{ animation: "fade-down 0.5s" }}
    >
      <DataTable columns={columns} data={data} />
    </div>
  );
}

const getData = async () => {
  try {
    // Fetch data from our GET method in the route file, as we are doing everything on server-side.
    const res = await import("../api/clients/route");

    if (!(await res.GET()).ok) {
      throw new Error("Failed to fetch data");
    }

    return await (await res.GET()).json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
