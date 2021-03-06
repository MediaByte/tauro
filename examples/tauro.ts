import Tauro from '../src/tauro';

const settings = {
    rate: '2500',
    samples_per_channel: '1',
    low_channel: '0',
    high_channel: '7',
    serial: "01DCF261",
    input_mode: "DIFFERENTIAL",
    volts: '10',
    channel_count: '16'
};

function main({ rate, samples_per_channel, low_channel, high_channel, serial, input_mode, volts, channel_count }) {

    const device : Tauro = new Tauro(rate, samples_per_channel, low_channel, high_channel, serial, input_mode, volts, channel_count);

    device.listen();

    console.log(device.getStatus());
}

main(settings);