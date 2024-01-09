import Flex, { FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>

const HStack = (props: HStackProps) => (
    <Flex direction="row" {...props} />
);

export default HStack;
