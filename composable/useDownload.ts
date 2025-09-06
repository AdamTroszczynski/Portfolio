export const useDownload = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/docs/AdamTroszczynski_CV.pdf';
    link.download = 'AdamTroszczynski_CV.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return { downloadCV };
};
