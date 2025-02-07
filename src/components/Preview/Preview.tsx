import {
    PDFViewer,
    PDFDownloadLink,
} from "@react-pdf/renderer";
import Button from "../Button/Button";
import CvLayout from "./CvLayout";
import "./Preview.css"

const styles = {
    viewer: {
        width: "595px",
        border: "none",
        height: "842px",
    },
}


interface PreviewProps{
    info: Record<string, string>
    education: Record<string, Record<string, string>>;
    work: Record<string, Record<string, string>>;
}
export default function Preview({info, education, work}:PreviewProps) {
    return (
        <div className="Preview card flex-align-cross-center">
            <PDFViewer showToolbar={false} style={styles.viewer}>
                <CvLayout info={info} education={education} work={work}></CvLayout>
            </PDFViewer>
            <PDFDownloadLink
                document={<CvLayout info={info} education={education} work={work} />}
                fileName="MyCV.pdf"
                style={{ textDecoration: "none" }}
            >
                {({ loading }) => (
                    <Button
                        label={loading ? "Loading document..." : "Download"}
                        clickhandler={() => {}}
                        icon="ri-download-2-line"
                    />
                )}
            </PDFDownloadLink>
        </div>
    );
}
