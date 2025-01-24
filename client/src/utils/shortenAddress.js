//export const shortenAddress = (address) =>`${address.slice(0,5)}....${address.slice(address.length-4)}`;

export const shortenAddress = (address) => {
    if (!address) return '';  // Return an empty string if address is invalid

    // Ensure the address is long enough before slicing
    return `${address.slice(0, 5)}....${address.slice(address.length - 4)}`;
};
