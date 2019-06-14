import React from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Exception } from 'ant-design-pro';

const Exception403 = () => (
  <Exception
    type="403"
    desc={formatMessage({ id: 'exception-403.description.403' })}
    linkElement={Link}
    backText={formatMessage({ id: 'exception-403.exception.back' })}
  />
);

export default Exception403;
