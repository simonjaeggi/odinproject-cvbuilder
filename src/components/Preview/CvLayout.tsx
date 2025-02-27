import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";
import { Education, Information } from "../../interface/utils.type";

const styles = StyleSheet.create({
    body: {
        padding: 20,
        fontFamily: "Helvetica",
        backgroundColor: "#ffffff",
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    subheader: {
        fontSize: 16,
        fontWeight: "normal",
        textAlign: "center",
        color: "#777",
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20,
        borderBottom: "2px solid #000",
        paddingBottom: 5,
    },
    sectionContent: {
        fontSize: 14,
        lineHeight: 1.6,
        marginTop: 10,
    },
    contactInfo: {
        fontSize: 14,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 30,
    },
    contactItem: {
        margin: "0 15px",
        fontSize: 14,
        color: "#555",
    },
    eduWorkSection: {
        marginTop: 20,
    },
    eduWorkEntry: {
        marginBottom: 15,
    },
    eduWorkTitleDate: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    eduWorkTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    eduWorkDate: {
        fontSize: 14,
        color: "#777",
        marginTop: 5,
    },
    eduWorkDescription: {
        fontSize: 14,
        marginTop: 5,
    },
    footer: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        fontSize: 12,
        textAlign: "center",
        color: "#888",
    },
});
interface CvLayoutProps {
    info: Information;
    education: Record<string, Record<string, string>>;
    work: Record<string, Record<string, string>>;
}
export default function CvLayout({ info, education, work }: CvLayoutProps) {
    return (
        <Document>
            <Page style={styles.body}>
                <Text
                    style={styles.header}
                >{`${info["info-name"]} ${info["info-surname"]}`}</Text>

                {/* General Information */}
                <Text style={styles.sectionTitle}>General Information</Text>
                <View style={styles.sectionContent}>

                    <Text>Surname: {info["info-surname"]}</Text>
                    <Text>Name: {info["info-name"]}</Text>
                    <Text>Email: {info["info-email"]}</Text>
                    <Text>Phone: {info["info-phone"]}</Text>
                </View>

                {/* Education */}
                <Text style={styles.sectionTitle}>Education</Text>
                <View style={styles.eduWorkSection}>

                {Object.entries(education).map(([key, value]) => {
                        const school = value[`edu-school-${key}`];
                        const program = value[`edu-program-${key}`];
                        const startDate = new Date(value[`edu-start-${key}`]).toLocaleDateString("en-US", { year: "numeric", month: "short" });
                        let endDate = value[`edu-end-${key}`];
                        if(endDate !== "Until Present"){
                            endDate = new Date(endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" });

                        }

                        return (
                            <View style={styles.eduWorkEntry} key={key}>
                                <View style={styles.eduWorkTitleDate}>
                                    <Text style={styles.eduWorkTitle}>
                                        {school}
                                    </Text>
                                    <Text style={styles.eduWorkDate}>
                                        {startDate} - {endDate}
                                    </Text>
                                </View>

                                <Text style={styles.eduWorkDescription}>
                                    {program}
                                </Text>
                            </View>
                        );
                    })}
                </View>

                {/* Work */}
                <Text style={styles.sectionTitle}>Work Experience</Text>
                <View style={styles.eduWorkSection}>

                    {Object.entries(work).map(([key, value]) => {
                        const company = value[`work-company-${key}`];
                        const position = value[`work-position-${key}`];
                        const startDate = new Date(value[`work-start-${key}`]).toLocaleDateString("en-US", { year: "numeric", month: "short" });
                        let endDate = value[`work-end-${key}`];
                        if(endDate !== "Until Present"){
                            endDate = new Date(endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" });

                        }

                        return (
                            <View style={styles.eduWorkEntry} key={key}>
                                <View style={styles.eduWorkTitleDate}>
                                    <Text style={styles.eduWorkTitle}>
                                        {company}
                                    </Text>
                                    <Text style={styles.eduWorkDate}>
                                        {startDate} - {endDate}
                                    </Text>
                                </View>

                                <Text style={styles.eduWorkDescription}>
                                    {position}
                                </Text>
                            </View>
                        );
                    })}
                </View>

                <Text style={styles.footer}>
                    © {`${new Date().getFullYear()} ${info["info-name"]} ${info["info-surname"]}`}                </Text>
            </Page>
        </Document>
    );
}
