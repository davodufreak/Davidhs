import { jsPDF } from 'jspdf';

export function generateCV(language: 'en' | 'es') {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let yPosition = 20;

  // Set green color for headings (#00A859)
  const greenColor: [number, number, number] = [0, 168, 89];

  if (language === 'en') {
    // Header - Name
    doc.setFontSize(24);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('David Hurtado.', margin, yPosition);
    yPosition += 8;

    // Subtitle
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    doc.text('UX Senior Manager · Product Strategist · Design Leader', margin, yPosition);
    yPosition += 5;

    // Contact info
    doc.setFontSize(9);
    doc.text('Mexico City · +52 56 1127 4440 · linkedin.com/in/davidhurtado91', margin, yPosition);
    yPosition += 3;
    doc.text('statue-comic-34420233.figma.site', margin, yPosition);
    yPosition += 10;

    // Profile Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Profile', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    const profileText = 'I design digital products that connect user needs with real business outcomes. UX Senior Manager with 10+ years leading digital initiatives across banking and technology.';
    const profileLines = doc.splitTextToSize(profileText, pageWidth - 2 * margin);
    doc.text(profileLines, margin, yPosition);
    yPosition += profileLines.length * 5 + 5;

    // Experience Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Experience', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    
    const experiences = [
      'Scotiabank Mexico — UX Senior Manager (2024–Present)',
      'Scotiabank Mexico — UX Designer (2021–2024)',
      'Igni — Creative Director (2019–2021)',
      'Broxel — UX/UI Lead (2019)',
      'Broxel — UX/UI Designer (2018–2019)',
    ];

    experiences.forEach((exp) => {
      doc.text(exp, margin, yPosition);
      yPosition += 6;
    });
    yPosition += 3;

    // Community Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Community', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text('Manifesto MX — Co-founder', margin, yPosition);
    yPosition += 10;

    // Certifications Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Certifications', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    const certsText = 'Continuous Discovery · Digital Product Management · Product Strategy · Customer Centricity';
    const certsLines = doc.splitTextToSize(certsText, pageWidth - 2 * margin);
    doc.text(certsLines, margin, yPosition);
    yPosition += certsLines.length * 5 + 5;

    // Education Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Education', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    
    const education = [
      'University of Guanajuato — Graphic Design',
      'MacSchool — Web Design',
      'GracoLabs — Stop Motion',
    ];

    education.forEach((edu) => {
      doc.text(edu, margin, yPosition);
      yPosition += 6;
    });
    yPosition += 3;

    // Languages Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Languages', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text('Spanish — Native · English — Bilingual', margin, yPosition);

  } else {
    // Spanish version
    // Header - Name
    doc.setFontSize(24);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('David Hurtado.', margin, yPosition);
    yPosition += 8;

    // Subtitle
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    doc.text('UX Senior Manager · Estratega de Producto · Líder de Diseño', margin, yPosition);
    yPosition += 5;

    // Contact info
    doc.setFontSize(9);
    doc.text('Ciudad de México · +52 56 1127 4440 · linkedin.com/in/davidhurtado91', margin, yPosition);
    yPosition += 3;
    doc.text('statue-comic-34420233.figma.site', margin, yPosition);
    yPosition += 10;

    // Profile Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Perfil', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    const profileText = 'Diseño productos digitales que conectan las necesidades de los usuarios con resultados reales de negocio. UX Senior Manager con más de 10 años liderando iniciativas digitales en banca y tecnología.';
    const profileLines = doc.splitTextToSize(profileText, pageWidth - 2 * margin);
    doc.text(profileLines, margin, yPosition);
    yPosition += profileLines.length * 5 + 5;

    // Experience Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Experiencia', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    
    const experiences = [
      'Scotiabank México — UX Senior Manager (2024–Presente)',
      'Scotiabank México — UX Designer (2021–2024)',
      'Igni — Director Creativo (2019–2021)',
      'Broxel — UX/UI Lead (2019)',
      'Broxel — UX/UI Designer (2018–2019)',
    ];

    experiences.forEach((exp) => {
      doc.text(exp, margin, yPosition);
      yPosition += 6;
    });
    yPosition += 3;

    // Community Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Comunidad', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text('Manifesto MX — Co-fundador', margin, yPosition);
    yPosition += 10;

    // Certifications Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Certificaciones', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    const certsText = 'Descubrimiento Continuo · Gestión de Productos Digitales · Estrategia de Producto · Centrado en el Cliente';
    const certsLines = doc.splitTextToSize(certsText, pageWidth - 2 * margin);
    doc.text(certsLines, margin, yPosition);
    yPosition += certsLines.length * 5 + 5;

    // Education Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Educación', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    
    const education = [
      'Universidad de Guanajuato — Diseño Gráfico',
      'MacSchool — Diseño Web',
      'GracoLabs — Stop Motion',
    ];

    education.forEach((edu) => {
      doc.text(edu, margin, yPosition);
      yPosition += 6;
    });
    yPosition += 3;

    // Languages Section
    doc.setFontSize(14);
    doc.setTextColor(...greenColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Idiomas', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text('Español — Nativo · Inglés — Bilingüe', margin, yPosition);
  }

  // Save the PDF
  const filename = language === 'en' ? 'David_Hurtado_CV_EN.pdf' : 'David_Hurtado_CV_ES.pdf';
  doc.save(filename);
}
