export default function getHealthStatus(obj) {
  if (!Object.prototype.hasOwnProperty.call(obj, 'health')) {
    return undefined;
  }
  let healthStatus;
  if (obj.health > 50) {
    healthStatus = 'healthy';
  } else if (obj.health <= 50 && obj.health >= 15) {
    healthStatus = 'wounded';
  } else {
    healthStatus = 'critical';
  }
  return healthStatus;
}
