import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import CardTitle from "@saleor/components/CardTitle";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

export interface WarehouseInfoProps {

}

const useStyles = makeStyles({
    name: {
        marginBottom: '5vh',
    },
    card: {
        marginTop: '10%',
    }
});

const WarehouseAssignToShop: React.FC<WarehouseInfoProps> = ({
}) => {
  const classes = useStyles({});
  const intl = useIntl();

  return (
    <Card className = {classes.card}>
      <CardTitle
        title={intl.formatMessage({
          defaultMessage: "Przydziel magazyn",
          description: "Shop assigned to"
        })}
      />
      <CardContent>
          <Typography color="textSecondary">
              <FormattedMessage defaultMessage="This warehouse has no shop assigned." />
          </Typography>
      </CardContent>
    </Card>
  );
};

WarehouseAssignToShop.displayName = "WarehouseAssignToShop";
export default WarehouseAssignToShop;
