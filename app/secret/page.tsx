import appStyles from "@/appStyle";
import CruelSeasonCard from "@/component/CruelSeasonCard";

export default function SecretPage() {

    return (
        <div style={appStyles.body}>
            <CruelSeasonCard type='info'>
                This is the secret page! What are you doing here!?
            </CruelSeasonCard>
        </div>
    )
}