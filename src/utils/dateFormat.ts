
export const formatDate = (dateString : any) => {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
};


