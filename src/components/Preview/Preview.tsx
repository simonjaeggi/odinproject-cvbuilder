import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Button from "../Button/Button";
import CvLayout from "./CvLayout";
import "./Preview.css";
import { Education, Information } from "../../interface/utils.type";

const styles = {
  viewer: {
    width: "595px",
    border: "none",
    height: "842px",
  },
};

interface PreviewProps {
  /**
   * Use object notation for types
   */
  info: Information;
  education: Record<string, Record<string, string>>;
  work: Record<string, Record<string, string>>;
}
export default function Preview({ info, education, work }: PreviewProps) {
  return (
    <div className="Preview card flex-align-cross-center">
      <PDFViewer showToolbar={true} style={styles.viewer}>
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
            handleClick={() => {}}
            iconElement={<i className="ri-download-2-line"></i>}
          />
        )}
      </PDFDownloadLink>
    </div>
  );
}
