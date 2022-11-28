import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

export const TooltipRegular = () => {
    return <BootstrapTooltip title="Provides up to 12 months enrolment in this course" placement="top" arrow>
        <span className="bg-silver text-white rounded-xl px-1 py-0.5 text-xs mr-0 xl:mr-6 h-5">?</span>
    </BootstrapTooltip>
};

export const TooltipMembership = () => {
    return <BootstrapTooltip title="Provides 12 of access to AIFS resources" placement="top" arrow>
        <span className="bg-silver text-white rounded-xl px-1 py-0.5 text-xs mr-0 absolute left-28 xl:left-40 h-5">?</span>
    </BootstrapTooltip>
};
