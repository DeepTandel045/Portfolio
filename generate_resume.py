import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

# Register TrueType fonts for native Unicode support and exact styling
font_dir = r"C:\Windows\Fonts"
times_regular = os.path.join(font_dir, "times.ttf")
times_bold = os.path.join(font_dir, "timesbd.ttf")
times_italic = os.path.join(font_dir, "timesi.ttf")

pdfmetrics.registerFont(TTFont("TimesNewRoman", times_regular))
pdfmetrics.registerFont(TTFont("TimesNewRoman-Bold", times_bold))
pdfmetrics.registerFont(TTFont("TimesNewRoman-Italic", times_italic))
pdfmetrics.registerFontFamily(
    "TimesNewRoman",
    normal="TimesNewRoman",
    bold="TimesNewRoman-Bold",
    italic="TimesNewRoman-Italic"
)

class PageTracker(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.page_count = 0

    def showPage(self):
        self.page_count += 1
        super().showPage()

def generate_pdf(output_path):
    margin = 36  # 0.5 in
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=32,
        bottomMargin=30,
    )

    usable_width = letter[0] - 2 * margin
    styles = getSampleStyleSheet()

    name_style = ParagraphStyle(
        'DocName',
        parent=styles['Normal'],
        fontName='TimesNewRoman',
        fontSize=24,
        leading=26,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#000000'),
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='TimesNewRoman',
        fontSize=9.5,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#222222'),
    )

    section_heading_style = ParagraphStyle(
        'DocSectionHeading',
        parent=styles['Normal'],
        fontName='TimesNewRoman-Bold',
        fontSize=11.5,
        leading=13.5,
        textColor=colors.HexColor('#000000'),
    )

    body_style = ParagraphStyle(
        'DocBody',
        parent=styles['Normal'],
        fontName='TimesNewRoman',
        fontSize=9.5,
        leading=12.2,
        alignment=TA_JUSTIFY,
        textColor=colors.HexColor('#111111'),
    )

    bullet_style = ParagraphStyle(
        'DocBullet',
        parent=styles['Normal'],
        fontName='TimesNewRoman',
        fontSize=9.2,
        leading=11.8,
        alignment=TA_LEFT,
        leftIndent=12,
        firstLineIndent=-12,
        textColor=colors.HexColor('#111111'),
    )

    story = []

    # 1. Header
    story.append(Paragraph("<b>Deep Tandel</b>", name_style))
    story.append(Spacer(1, 4))

    contact_line1 = (
        'Valsad, Gujarat, India &nbsp;|&nbsp; '
        '<a href="tel:+918128196106" color="#111111">+91 8128196106</a> &nbsp;|&nbsp; '
        '<a href="mailto:tandeldeep6106@gmail.com" color="#111111">tandeldeep6106@gmail.com</a>'
    )
    story.append(Paragraph(contact_line1, contact_style))
    story.append(Spacer(1, 2))

    links_line = (
        '<a href="https://github.com/DeepTandel045" color="#0000ee"><u>GitHub</u></a> &nbsp;|&nbsp; '
        '<a href="https://www.linkedin.com/in/deep-tandel-63079a320/" color="#0000ee"><u>LinkedIn Profile</u></a> &nbsp;|&nbsp; '
        '<a href="https://deeptandel.dev" color="#0000ee"><u>Portfolio</u></a>'
    )
    story.append(Paragraph(links_line, contact_style))
    story.append(Spacer(1, 8))

    def add_section_header(title):
        story.append(Spacer(1, 5))
        story.append(Paragraph(f"<b>{title}</b>", section_heading_style))
        story.append(Spacer(1, 1.5))
        story.append(HRFlowable(
            width="100%", thickness=0.6, color=colors.HexColor('#333333'),
            spaceBefore=0, spaceAfter=4
        ))

    # 2. Professional Summary
    add_section_header("Professional Summary")
    summary_text = (
        "Information Technology undergraduate at CHARUSAT with hands-on experience in C++, Python, "
        "full-stack web development, databases, REST APIs, and AI-powered applications. Developed FoodLens, "
        "a full-stack food intelligence platform integrating barcode-based product identification, OCR, "
        "external APIs, personalized analysis, and AI-generated explanations. Strong foundation in DSA, "
        "DBMS, OOP, and problem solving."
    )
    story.append(Paragraph(summary_text, body_style))

    # 3. Education
    add_section_header("Education")
    edu_data = [
        [
            Paragraph("<b>B.Tech in Information Technology</b> — CHARUSAT, Gujarat", body_style),
            Paragraph("<b>2024 – 2028 (Expected)</b>", ParagraphStyle('R1', parent=body_style, alignment=TA_RIGHT))
        ],
        [
            Paragraph("CGPA: 7.78", body_style),
            Paragraph("", body_style)
        ],
        [
            Paragraph("<b>Higher Secondary Certificate (Class XII)</b> — Gujarat State Board", body_style),
            Paragraph("<b>2024</b>", ParagraphStyle('R2', parent=body_style, alignment=TA_RIGHT))
        ],
        [
            Paragraph("Percentage: 86.15%", body_style),
            Paragraph("", body_style)
        ],
        [
            Paragraph("<b>Secondary School Certificate (Class X)</b> — Gujarat State Board", body_style),
            Paragraph("<b>2022</b>", ParagraphStyle('R3', parent=body_style, alignment=TA_RIGHT))
        ],
        [
            Paragraph("Percentage: 89.15%", body_style),
            Paragraph("", body_style)
        ]
    ]

    t_edu = Table(edu_data, colWidths=[usable_width * 0.72, usable_width * 0.28])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 1),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ]))
    story.append(t_edu)

    # 4. Technical Skills
    add_section_header("Technical Skills")
    skills = [
        ("Languages", "C, C++, Python, JavaScript"),
        ("Backend", "FastAPI, REST APIs"),
        ("Frontend", "React, HTML, CSS"),
        ("Databases", "MySQL / PostgreSQL / SQLite"),
        ("AI / Computer Vision", "OCR, Tesseract, OpenCV, LLM APIs"),
        ("APIs", "Open Food Facts API"),
        ("Concepts", "Data Structures & Algorithms, OOP, DBMS, REST APIs"),
        ("Tools", "Git, GitHub, VS Code"),
    ]
    for cat, items in skills:
        story.append(Paragraph(f"• <b>{cat}</b>: {items}", bullet_style))

    # 5. Projects
    add_section_header("Projects")
    story.append(Paragraph("<b>FoodLens — AI-Powered Food Intelligence Platform</b>", body_style))
    story.append(Spacer(1, 1))
    foodlens_points = [
        "Developed a full-stack web application that analyzes packaged food using barcode scanning, Open Food Facts API, and OCR-based label extraction.",
        "Built a FastAPI backend with user authentication, profile management, dietary preferences, product analysis, and database integration.",
        "Implemented nutrition, ingredient, additive, allergen, and personalized food-score analysis to help users make informed food choices.",
        "Integrated AI-powered explanations and recommendations while keeping numerical food scoring based on a deterministic scoring algorithm.",
        "Designed features for product comparison, healthier alternatives, scan history, shopping-basket analysis, and nutrition dashboards.",
    ]
    for pt in foodlens_points:
        story.append(Paragraph(f"• {pt}", bullet_style))

    story.append(Spacer(1, 3))
    story.append(Paragraph("<b>SQL Query Developer</b>", body_style))
    story.append(Spacer(1, 1))
    sql_points = [
        "Developed complex SQL queries for efficient data retrieval and relational database management.",
        "Worked with normalized database structures and applied query optimization techniques to improve performance.",
        "Gained hands-on experience with schema design, joins, aggregations, and subqueries.",
    ]
    for pt in sql_points:
        story.append(Paragraph(f"• {pt}", bullet_style))

    # 6. Achievements
    add_section_header("Achievements")
    story.append(Paragraph("• Solved 180+ coding problems across LeetCode (160+), GeeksforGeeks, and HackerRank.", bullet_style))

    # 7. Certifications
    add_section_header("Certifications")
    nptel_line = (
        '• <b>Data Structure and Algorithms using Java</b> — '
        '<a href="https://nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS148S951400112" color="#0000ee"><u>NPTEL Online Certification, IIT Kharagpur</u></a> '
        '(Roll No: NPTEL25CS148S951400112)'
    )
    story.append(Paragraph(nptel_line, bullet_style))
    coursera_line = '• <b>Foundations of Data Structures and Algorithm Analysis</b> — Coursera'
    story.append(Paragraph(coursera_line, bullet_style))

    tracker = PageTracker
    doc.build(story, canvasmaker=tracker)
    print(f"Generated {output_path} successfully!")

if __name__ == '__main__':
    generate_pdf('public/resume.pdf')
