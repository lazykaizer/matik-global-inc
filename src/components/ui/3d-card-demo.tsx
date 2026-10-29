import { InteractiveTravelCard } from "@/components/ui/3d-card";

export default function InteractiveTravelCardDemo() {
  return (
    <div className="flex min-h-[30rem] w-full items-center justify-center bg-[#050B1A] p-8">
      <div 
        style={{
          perspective: "1000px"
        }}
      >
        <InteractiveTravelCard
          title="Sapa Valley"
          subtitle="Vietnam"
          imageUrl="https://cdn.21st.dev/assets/mirror/cb/cba31f67585cf839050f0f22fbea6a3ba72bed28250b0afd82cf354da4b1e652.jpg"
          actionText="Book your trip"
          href="https://en.wikipedia.org/wiki/Sa_Pa"
          onActionClick={() => {
            alert("This action can be customized via the onActionClick prop.");
          }}
        />
      </div>
    </div>
  );
}
